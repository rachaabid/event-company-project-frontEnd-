import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IOption } from 'ng-select';
import { ToastrService } from 'ngx-toastr';
import { EventService } from './services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  listEvents: any;
  eventForm?: FormGroup;
  submitted = false;
  id: any;
  fileSelected: any;
  listTags:Array<IOption> =[]
  searchEvent: string = '';
  constructor(private eventService: EventService, private toastr: ToastrService) {
  
   }

  ngOnInit(): void {
    this.loadEvents();
    this.loadTags();
    this.eventForm = new FormGroup({
      eventName: new FormControl('', Validators.required),
      eventDescription: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate:new FormControl('', Validators.required),
      startTime: new FormControl('', Validators.required),
      endTime: new FormControl('', Validators.required),
      photo: new FormControl(''),
      price: new FormControl('', Validators.required),
      availableTicketNumber: new FormControl('', Validators.required),
      eventType: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      tags: new FormControl(''),
    })
  }


  loadEvents() {
    this.eventService.getEvents().subscribe(data => this.listEvents = data);
  }
  
  loadTags(){
    this.eventService.getTags().subscribe((data:any)=>{this.listTags=data,
    console.log(data)})
    
  }

  selectImage(event: any) {
    this.fileSelected = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(this.fileSelected);
    reader.onloadend = () => {
      const base64String = (<string>reader.result).replace("data:", "").replace(/^.+,/, "");
      this.eventForm?.controls['photo'].setValue("data:image/jpeg;base64," + base64String.toString())
    }
  }
  

  addEvent() {
    this.submitted = true;
    if (this.eventForm?.invalid) {
      return
    }
     let formData:any=new FormData();
     const eventForm = this.eventForm?.value;
     Object.keys(eventForm).forEach(fieldName => {
       formData.append(fieldName, eventForm[fieldName]);
     });
     if(this.fileSelected){
       formData.append('photo', this.fileSelected, this.fileSelected.name)
     }
    this.eventService.createEvent(formData).subscribe(data=>{
      console.log(data);
      this.toastr.success('Event created', 'Good')
      location.reload()
    }, (error)=>{
      console.log(error)
    }
      )

  }

  showEventData(id: any){
    this.id=id;
    this.eventService.getEventById(id).subscribe(data=>{this.eventForm?.patchValue(data);
    this.toastr.info('here is your data', 'To modify')
    })
   }
 
   saveChanges(){
     this.submitted = true;
     if(this.eventForm?.invalid){
       return
     }
     let formData:any=new FormData();
     const eventForm = this.eventForm?.value;
     Object.keys(eventForm).forEach(fieldName => {
       formData.append(fieldName, eventForm[fieldName]);
     });
     if(this.fileSelected){
       formData.append('photo', this.fileSelected, this.fileSelected.name)
     }
     this.eventService.saveUpdate(this.id, formData).subscribe(data=>location.reload(),
     (error)=>{
      console.log(error)})
   }

   deleteEvent(i: any){
    this.eventService.removeEvent(i).subscribe(data=>{this.ngOnInit();
    this.toastr.info('data deleted', 'Event')}, 
    )
  }

 changeTag(e: any){
 this.eventForm?.get('tags')?.setValue(e.target.value, {onlySelf: true})
 }

}
