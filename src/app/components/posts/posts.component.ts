import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
    posts$: Observable<Post[]>;

    constructor(private postService: PostService) {}

    ngOnInit(): void {
        this.posts$ = this.postService.posts$;

        this.postService.loadPosts().subscribe();
    }
}
