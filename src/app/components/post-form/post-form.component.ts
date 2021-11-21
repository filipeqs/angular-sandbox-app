import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
    selector: 'app-post-form',
    templateUrl: './post-form.component.html',
    styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
    @Output() onUpdatedPost = new EventEmitter();
    @Input() currentPost: Post;
    @Input() isEdit: boolean;

    constructor(private postService: PostService) {}

    ngOnInit(): void {}

    addPost(title, body) {
        if (!title || !body) {
            alert('Please add post Title and Body');
        } else {
            this.postService.savePost({ title, body } as Post).subscribe();
        }
    }

    updatePost() {
        this.postService.updatePost(this.currentPost).subscribe(() => {
            this.isEdit = false;
            this.onUpdatedPost.next();
        });
    }
}
