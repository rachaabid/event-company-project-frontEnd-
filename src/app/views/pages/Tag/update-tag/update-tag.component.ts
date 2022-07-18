import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TagService } from '../services/tag.service';

@Component({
  selector: 'app-update-tag',
  templateUrl: './update-tag.component.html',
  styleUrls: ['./update-tag.component.scss']
})
export class UpdateTagComponent implements OnInit {
  tagForm?: FormGroup;
  listTags: any;
  id: any;
  submitted = false;
  constructor(private tagService: TagService) { }

  ngOnInit(): void {
    this.loadTags();
    this.tagForm = new FormGroup ({
      title: new FormControl ('', Validators.required),
      description: new FormControl ('', Validators.required)
    })
  }

  loadTags(){
 this.tagService.getTags().subscribe(data=>this.listTags=data)
  }

  showEventData(id: any){
    this.id=id;
    this.tagService.getTagById(id).subscribe(data=>{this.tagForm?.patchValue(data);})
   }
 
   saveChange(){
     this.submitted = true;
     if(this.tagForm?.invalid){
       return
     }
     this.tagService.saveUpdate(this.id, this.tagForm?.value).subscribe(data=>{this.loadTags();})
   }
}
