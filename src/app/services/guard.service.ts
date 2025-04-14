import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ItemsService } from './items.service';

// @Injectable()
@Injectable({
  providedIn: 'root'
})
export class GuardService {
  
  constructor(private router: Router, private authCheck:ItemsService) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree{
    console.log(route, state)
    switch(state.url){
      case '/dashboard': {
        if(!this.authCheck.checkAuth()){
          console.log('Not Validated')
          let url = this.router.createUrlTree(['/profile'])
          return url;
        }
      }
      break;
      
      case '/profile': {
        if(this.authCheck.checkAuth()){
          console.log('Validated')
          this.router.navigate(['/dashboard'])
          return false;
        }
      }break;
    }
    return true; 
    
  }
}
