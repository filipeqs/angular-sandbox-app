import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
    selector: 'app-post-form',
    templateUrl: './post-form.component.html',
    styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
    @Output() newPost: EventEmitter<Post> = new EventEmitter();

    constructor(private postService: PostService) {}

    ngOnInit(): void {}

    addPost(title, body) {
        if (!title || !body) {
            alert('Please add post');
        } else {
            this.postService.savePost({ title, body } as Post).subscribe((post) => {
                this.newPost.emit(post);
            });
        }
    }
}
