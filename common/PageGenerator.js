import { Login } from '../pages/Login'
import { Home } from '../pages/Home'
import { ProductDetail } from '../pages/ProductDetail'

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
}