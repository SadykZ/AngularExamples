import { Component, OnInit } from '@angular/core';

//  Services
import { CustomServiceService } from '../../services/custom-service.service';

//  Http Services
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//  Forms (Model)
import { FormGroup, FormControl } from '@angular/forms';

//  Animations
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-show-value',
  templateUrl: './show-value.component.html',
  styleUrls: ['./show-value.component.css'],
  //  Animations
  styles:
  [
    `
    div
    {
      margin: 0 auto;
      text-align: center;
      width:200px;
   }
   .rotate
   {
      width:100px;
      height:100px;
      border:solid 1px red;
   }
    `
  ],
  animations:
  [
    trigger('myanimation',[
       state('smaller',style({
          transform : 'translateY(100px)'
       })),
       state('larger',style({
          transform : 'translateY(0px)'
       })),
       transition('smaller <=> larger',animate('300ms ease-in'))
    ])
  ]
})
export class ShowValueComponent implements OnInit
{
  //  Переменная
  customValue = "Sadyk Ziyatbekov";

  //  Время в миллесекундах и Запись/Чтение в миллесекундах
  currentDate: Date;
  expireDate: Date;

  //  DropDownList with Event
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  //  Show or Hide; ngTemplate; Events;
  isAvailable = true;

  //  Pipes
  now = new Date();

  //  Services
  nowFromService;
  serviceFirstVal;
  serviceSecondVal;

  //  Directives
  steve =
  {
    firstname: 'Steve',
    secondname: 'Jobs'
  };

  //  HttpServices
  httpData;

  //  Form (Model)
  formData;

  //  Animations
  state = "smaller";

  constructor
  (
    //  Services
    private customService: CustomServiceService,

    //  Http Services
    private http: Http
  )
  {

  }

  ngOnInit()
  {
    //  Время в миллесекундах и Запись/Чтение в миллесекундах
    this.currentDate = new Date();  //  Текущая дата
    this.expireDate = new Date();   //  Дата истечения
    this.expireDate.setDate(this.expireDate.getDate() + 1); //  Текущая дата + 1 день
    localStorage.setItem('TokenExpire', this.expireDate.getTime().toString());  //  Запись даты истечения в миллесекундах (начиная с 1.1.1970)
    alert(localStorage.getItem('TokenExpire'));


    //  Services
    this.nowFromService = this.customService.nowFromService();
    this.serviceFirstVal = this.customService.serviceFirstValue;
    this.customService.serviceSecondValue = "Changed value in component!";
    this.serviceSecondVal = this.customService.serviceSecondValue;

    //  Http Services
    //  get - get data from rest service
    //  map - method helps to convert data to json format
    //  subscribe - works after got data
    this.http.get("https://jsonplaceholder.typicode.com/users")
              .map((response) => response.json())
              .subscribe
              (
                (data) =>
                {
                  this.httpData = data;
                  console.log(data);
                }
              );

    //  Form (Model)
    this.formData = new FormGroup
    (
      {
        email: new FormControl("test@test.kz"),
        pass: new FormControl("123456")
      }
    );
  }

  //  DropDownList with Events
  customDropDown(event)
  {
    alert("Item is selected!");
  }

  //  Events
  customButtonClick(event)
  {
    //alert("Button is clicked!");
    this.isAvailable = !this.isAvailable;
  }

  //  Forms (Template)
  onClickFormTemplate(data)
  {
    alert("Entered Email ID: " + data.emailID + "; Password: " + data.password);
  }

  //  Forms (Model)
  onClickFormModel(data)
  {
    alert("Entered Email ID: " + data.email + "; Password: " + data.pass);
  }

  //  Animations
  animate()
  {
    this.state= this.state == 'larger' ? 'smaller' : 'larger';
  }
}
