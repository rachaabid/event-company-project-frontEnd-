import { Component, OnInit } from '@angular/core';
import {TagService} from '../services/tag.service';

@Component({
  selector: 'app-list-tag',
  templateUrl: './list-tag.component.html',
  styleUrls: ['./list-tag.component.scss']
})
export class ListTagComponent implements OnInit {

  listTags: any;
  constructor(private tagService: TagService) { }

  ngOnInit(): void {
    this.loadTags();
  }

  loadTags(){
    this.tagService.getTags().subscribe(data =>this.listTags=data);
  }

  deleteTag(i: any){
    this.tagService.deleteTag(i).subscribe(data=>{this.loadTags();})
  }

}
