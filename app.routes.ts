import { Routes } from '@angular/router';
import { Home } from './home/home';
import { FruitDetailComponent } from './fruit-detail/fruit-detail';
import { Cart } from './cart/cart';
import { Checkout } from './checkout/checkout';
import { Dashboard } from './dashboard/dashboard';
import { Signin } from './auth/signin/signin';
import { authGuard } from './auth/auth-guard';
import { Employees } from './auth/employees/employees';
import { Signup } from './auth/signup/signup';
import { Orderlist } from './orderlist/orderlist';
import { WishlistComponent } from './wishlist/wishlist.component';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'fruit/:id', component: FruitDetailComponent, title: 'Fruit Detail' },
  { path: 'cart', component: Cart, title: 'Giỏ hàng' },
  { path: 'checkout', component: Checkout, title: 'Thanh toán' },
  { path: 'dashboard', component: Dashboard, title: 'Dashboard', canActivate: [authGuard]},
  { path: 'employees', component: Employees, title: 'Employees' },
  { path: 'signup', component: Signup, title: 'Đăng ký' },
  { path: 'login', component: Signin, title: 'Đăng nhập' },
  { path: 'signin', component: Signin, title: 'Đăng nhập' },
  { path: 'orderlist', component: Orderlist, title: 'Order List'},
  { path: 'wishlist', component: WishlistComponent, title: 'Danh sách yêu thích' },
  { path: '**', redirectTo: '' }
];
