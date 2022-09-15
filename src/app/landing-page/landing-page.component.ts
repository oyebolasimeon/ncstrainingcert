import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  loading: boolean = true;
  forms: boolean = true;
  searchFind: any;

  constructor(private notification: ToastrService, private route: Router) { }

  ngOnInit(): void {
    this.onLoad()
  }

  onLoad(){
    setTimeout(() => {
      this.loading = false;
    }, 1000)
    
  }

  userCredVal(){

    const email = (<HTMLInputElement>document.getElementById("useremail"))
    const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    this.searchFind = regexp.test(email.value);

    if(email.value != ""){
      if(this.searchFind == true){
        this.notification.success("EMAIL VERIFIED SUCCESSFULLY")
        this.forms = false;
      } else{
        this.notification.warning("USE A VALID EMAIL")
      }
    } else {
      this.notification.error("EMAIL CANNOT BE EMPTY")
    }
    return this.forms;
  }


  getStudentValidName(){
    const studentName = (<HTMLInputElement>document.getElementById("stuName"))
    if(studentName.value != ""){
      this.notification.info("CONGRATULATIONS ON COMPLETING THE TRAINING MODULE")
      this.route.navigate(['/my-certificate'])
    } else {
      this.notification.warning("NAME CANNOT BE EMPTY")
    }
  }
}


