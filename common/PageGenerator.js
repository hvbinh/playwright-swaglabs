import { Login } from '../pages/Login'
import { Home } from '../pages/Home'
import { ProductDetail } from '../pages/ProductDetail'
import { Cart } from '../pages/Cart';
import { Checkout } from '../pages/Checkout';

export class PageGenerator{
   static getLoginPage(page)
   {
        return new Login(page);
   }
   static getHomePage(page)
   {
        return new Home(page);
   }
   static getProductDetailPage(page)
   {
        return new ProductDetail(page);
   }
   static getCartPage(page)
   {
        return new Cart(page);
   }
   static getCheckoutPage(page)
   {
        return new Checkout(page);
   }
}