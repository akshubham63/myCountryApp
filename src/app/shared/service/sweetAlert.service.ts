import { Injectable } from "@angular/core";
import Swal from "sweetalert2";

@Injectable({
    providedIn: 'root'
})

export class SweetAlertService{
    onSucessSignUpAlert(){
        return Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Account has been created successfully!!!',
            showConfirmButton: true
        })
    }

    onUnSuccessSignUpAlert(){
        return Swal.fire({
            position: 'center',
            icon: 'error',
            text: 'User not created please enter valid inputs',
            showConfirmButton: true
        });
    }
}