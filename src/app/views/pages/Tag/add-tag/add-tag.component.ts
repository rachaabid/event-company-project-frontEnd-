import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TagService } from '../services/tag.service';

@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.scss']
})
export class AddTagComponent implements OnInit {
  tagForm?: FormGroup;
  submitted = false;
  listTags: any;
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
    this.tagService.addTag(this.tagForm?.value).subscribe(data => { this.loadTags(); })
  }
}
