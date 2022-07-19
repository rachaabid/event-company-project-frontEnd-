import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TagService } from './services/tag.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  tagForm?: FormGroup;
  submitted = false;
  listTags: any;
  id: any;
  constructor(private tagService: TagService) { }

  ngOnInit(): void {
    this.loadTags();
    this.tagForm = new FormGroup ({
      title: new FormControl ('', Validators.required),
      description: new FormControl ('', Validators.required)
    })
  }

  loadTags(){
  this.tagService.getTags().subscribe(data=>this.listTags = data);
  }

  addTag(){
    this.submitted = true;
    if (this.tagForm?.invalid){
      return
    }
    this.tagService.createTag(this.tagForm?.value).subscribe(data => location.reload())
  }

  deleteTag(i: any){
    this.tagService.removeTag(i).subscribe(data=>{this.ngOnInit();})
  }

  showTagData(id: any){
    this.id=id;
    this.tagService.getTagById(id).subscribe(data=>{this.tagForm?.patchValue(data);})
   }
 
   saveChanges(){
     this.submitted = true;
     if(this.tagForm?.invalid){
       return
     }
     this.tagService.saveUpdate(this.id, this.tagForm?.value).subscribe(data=>location.reload(), 
     (error)=>{
      console.log(error)})
   }

}
