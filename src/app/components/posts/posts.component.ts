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
    currentPost: Post = {
        id: 0,
        title: '',
        body: '',
    };
    isEdit: boolean = false;

    constructor(private postService: PostService) {}

    ngOnInit(): void {
        this.posts$ = this.postService.posts$;

        this.postService.loadPosts().subscribe();
    }

    editPost(post: Post) {
        this.currentPost = post;
        this.isEdit = true;
    }
}
