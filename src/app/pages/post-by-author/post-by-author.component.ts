import { Component, inject, signal } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../../interfaces';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-by-author',
  imports: [FormsModule],
  templateUrl: './post-by-author.component.html',
  styleUrl: './post-by-author.component.css'
})
export class PostByAuthorComponent {

  private readonly postService = inject(PostService)

  authorId = signal<string>('')

  posts = signal<Post[]>([])

  getPosts(): void {
    this.postService.getPostsByAuthorId(Number(this.authorId())).subscribe(data => this.posts.set(data))
  }


}
