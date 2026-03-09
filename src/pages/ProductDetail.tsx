import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShoppingCart, Loader2, ArrowLeft } from "lucide-react";
import { storefrontApiRequest, STOREFRONT_PRODUCT_BY_HANDLE_QUERY } from "@/lib/shopify";
import { useCartStore, ShopifyProduct } from "@/stores/cartStore";
import { toast } from "sonner";

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<ShopifyProduct["node"] | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const addItem = useCartStore(state => state.addItem);
  const isCartLoading = useCartStore(state => state.isLoading);

  useEffect(() => {
    if (!handle) return;
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const data = await storefrontApiRequest(STOREFRONT_PRODUCT_BY_HANDLE_QUERY, { handle });
        if (data?.data?.productByHandle) {
          setProduct(data.data.productByHandle);
        }
      } catch (error) {
        console.error('Failed to fetch product:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [handle]);

  const handleAddToCart = async () => {
    if (!product) return;
    const variant = product.variants.edges[selectedVariantIdx]?.node;
    if (!variant) return;
    const shopifyProduct: ShopifyProduct = { node: product };
    await addItem({
      product: shopifyProduct,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success("Added to cart", { description: product.title });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center pt-24">
          <Loader2 className="h-8 w-8 animate-spin text-luxury-navy" />
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center pt-24">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-luxury-navy mb-4">Product not found</h2>
            <Button asChild className="btn-luxury-primary">
              <Link to="/shop">Back to Shop</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const images = product.images.edges;
  const selectedVariant = product.variants.edges[selectedVariantIdx]?.node;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 flex-1">
        <Link to="/shop" className="inline-flex items-center gap-2 text-luxury-navy/70 hover:text-luxury-navy mb-8 font-montserrat text-sm">
          <ArrowLeft className="h-4 w-4" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
              {images[selectedImage]?.node ? (
                <img
                  src={images[selectedImage].node.url}
                  alt={images[selectedImage].node.altText || product.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">No image</div>
              )}
            </div>
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                      selectedImage === idx ? "border-luxury-navy" : "border-transparent"
                    }`}
                  >
                    <img src={img.node.url} alt={img.node.altText || ""} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              {product.productType && (
                <span className="text-xs font-medium uppercase tracking-wider text-luxury-navy/60">{product.productType}</span>
              )}
              <h1 className="text-3xl md:text-4xl font-bold text-luxury-navy mt-1">{product.title}</h1>
            </div>

            {selectedVariant && (
              <p className="text-3xl font-bold text-luxury-navy">
                {selectedVariant.price.currencyCode} {parseFloat(selectedVariant.price.amount).toFixed(2)}
              </p>
            )}

            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            {/* Options */}
            {product.options?.filter(o => o.name !== "Title").map(option => (
              <div key={option.name} className="space-y-2">
                <label className="text-sm font-medium text-luxury-navy">{option.name}</label>
                <div className="flex flex-wrap gap-2">
                  {product.variants.edges.map((v, idx) => {
                    const optVal = v.node.selectedOptions.find(so => so.name === option.name)?.value;
                    if (!optVal) return null;
                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedVariantIdx(idx)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                          selectedVariantIdx === idx
                            ? "border-luxury-navy bg-luxury-navy text-white"
                            : "border-border hover:border-luxury-navy/50"
                        }`}
                      >
                        {optVal}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            <Button
              className="w-full btn-luxury-primary text-lg py-6"
              onClick={handleAddToCart}
              disabled={isCartLoading || !selectedVariant?.availableForSale}
            >
              {isCartLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : !selectedVariant?.availableForSale ? (
                "Out of Stock"
              ) : (
                <><ShoppingCart className="h-5 w-5 mr-2" />Add to Cart</>
              )}
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
