// Angualr modules
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';

// External libreries
import Swal from 'sweetalert2';
import { catchError, tap } from 'rxjs';

export const authGuard: CanActivateFn = (_route, _state) => {

  const userService = inject(UserService);
  const router = inject(Router);


  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false  ,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  return userService.checkAndRenewToken().pipe(
    tap(isLogget => {
      if(!isLogget) {

        Toast.fire({
          icon: "question",
          title: "you need login first"
        });

        router.navigateByUrl('/login');
      }else{

        Toast.fire({
          icon: "success",
          title: "successful login"
        });

      }
    })
  )
};
