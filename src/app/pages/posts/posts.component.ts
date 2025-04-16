import { Component, inject, OnInit, signal } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../../interfaces';
import { PostItemComponent } from '../../components/post-item/post-item.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-posts',
  imports: [PostItemComponent, AsyncPipe],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {

  private readonly postService = inject(PostService)


  posts = this.postService.getPosts()


}
