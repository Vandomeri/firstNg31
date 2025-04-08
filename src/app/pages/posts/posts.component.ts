import { Component, inject, OnInit, signal } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../../interfaces';
import { PostItemComponent } from '../../components/post-item/post-item.component';

@Component({
  selector: 'app-posts',
  imports: [PostItemComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {

  private readonly postService = inject(PostService)


  posts = signal<Post[]>([])


  ngOnInit(): void {
    this.postService.getPosts().subscribe(data => this.posts.set(data))
  }


}
