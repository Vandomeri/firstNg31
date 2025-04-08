import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../../interfaces';
import { PostService } from '../../services/post.service';
@Component({
  selector: 'app-single-post',
  imports: [],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})
export class SinglePostComponent implements OnInit {

  private readonly route = inject(ActivatedRoute)
  private readonly postService = inject(PostService)
  id: string = this.route.snapshot.paramMap.get('id')!

  post?: Post

  ngOnInit(): void {
    this.postService.getPostById(this.id).subscribe(data => this.post = data)
  }



}
