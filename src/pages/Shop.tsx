import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShoppingCart, Loader2 } from "lucide-react";
import { storefrontApiRequest, STOREFRONT_PRODUCTS_QUERY, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

const CATEGORIES = [
  { label: "All", query: null },
  { label: "Bedroom", query: "product_type:Bedroom" },
  { label: "Living Room", query: "product_type:Living Room" },
  { label: "Dining Room", query: "product_type:Dining Room" },
  { label: "Kitchens", query: "product_type:Kitchens" },
  { label: "Built-ins", query: "product_type:Built-ins" },
  { label: "Bathrooms", query: "product_type:Bathrooms" },
  { label: "Doors", query: "product_type:Doors" },
];

const Shop = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const addItem = useCartStore(state => state.addItem);
  const isCartLoading = useCartStore(state => state.isLoading);

  useEffect(() => {
    fetchProducts();
  }, [activeCategory]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const category = CATEGORIES.find(c => c.label === activeCategory);
      const variables: Record<string, unknown> = { first: 50 };
      if (category?.query) variables.query = category.query;
      
      const data = await storefrontApiRequest(STOREFRONT_PRODUCTS_QUERY, variables);
      if (data?.data?.products?.edges) {
        setProducts(data.data.products.edges);
      }
    } catch (error) {
      console.error('Failed to fetch products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async (product: ShopifyProduct) => {
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success("Added to cart", { description: product.node.title });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-luxury-navy via-luxury-navy-light to-luxury-navy pt-32 pb-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 letter-spacing-luxury">
            Shop <span className="text-luxury-gold">Furniture & Fittings</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Premium bedroom, living room, dining room furniture, kitchens, built-ins, bathrooms & doors — curated by Hillman Property.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="bg-white border-b border-border sticky top-20 lg:top-24 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {CATEGORIES.map(cat => (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(cat.label)}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium font-montserrat transition-all duration-300 ${
                  activeCategory === cat.label
                    ? "bg-luxury-navy text-white"
                    : "bg-muted text-muted-foreground hover:bg-luxury-navy/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-luxury-platinum/30 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-luxury-navy" />
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-luxury-navy mb-2">No products found</h3>
              <p className="text-muted-foreground">Check back soon — we're adding new items regularly.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => {
                const image = product.node.images.edges[0]?.node;
                const price = product.node.priceRange.minVariantPrice;
                return (
                  <Card key={product.node.id} className="card-luxury group overflow-hidden">
                    <Link to={`/product/${product.node.handle}`}>
                      <div className="aspect-square bg-muted overflow-hidden">
                        {image ? (
                          <img
                            src={image.url}
                            alt={image.altText || product.node.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                            No image
                          </div>
                        )}
                      </div>
                    </Link>
                    <CardContent className="p-4 space-y-2">
                      <Link to={`/product/${product.node.handle}`}>
                        <h3 className="font-semibold text-luxury-navy text-sm line-clamp-2 group-hover:underline">
                          {product.node.title}
                        </h3>
                      </Link>
                      <p className="text-xs text-muted-foreground line-clamp-2">{product.node.description}</p>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-lg font-bold text-luxury-navy">
                          {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
                        </span>
                        <Button
                          size="sm"
                          className="btn-luxury-primary text-xs"
                          onClick={(e) => { e.preventDefault(); handleAddToCart(product); }}
                          disabled={isCartLoading}
                        >
                          {isCartLoading ? <Loader2 className="h-3 w-3 animate-spin" /> : <><ShoppingCart className="h-3 w-3 mr-1" />Add</>}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
