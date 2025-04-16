import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/posts/posts.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { PostByAuthorComponent } from './pages/post-by-author/post-by-author.component';
import { FormTestComponent } from './pages/form-test/form-test.component';
import { PipeTestComponent } from './pipe-test/pipe-test.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: SinglePostComponent },
  { path: 'posts/search/author', component: PostByAuthorComponent },
  { path: 'form', component: FormTestComponent },
  { path: 'pipes', component: PipeTestComponent }
];
