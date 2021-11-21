import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from '../models/Post';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
    providedIn: 'root',
})
export class PostService {
    postsUrl = 'https://jsonplaceholder.typicode.com/posts';
    private postsSource = new BehaviorSubject<Post[]>([]);
    posts$ = this.postsSource.asObservable();

    constructor(private http: HttpClient) {}

    getCurrentPosts() {
        return this.postsSource.value;
    }

    loadPosts() {
        return this.http.get<Post[]>(this.postsUrl).pipe(
            map((posts) => {
                this.postsSource.next(posts);
            }),
        );
    }

    savePost(post: Post) {
        return this.http.post<Post>(this.postsUrl, post, httpOptions).pipe(
            map((post) => {
                const posts = this.getCurrentPosts();
                posts.unshift(post);
                this.postsSource.next(posts);
            }),
        );
    }

    updatePost(post: Post) {
        const url = `${this.postsUrl}/${post.id}`;

        return this.http.put<Post>(url, post, httpOptions).pipe(
            map((post) => {
                const posts = this.getCurrentPosts();
                posts.forEach((cur, index) => {
                    if (post.id === cur.id) {
                        posts.splice(index, 1);
                        posts.unshift(post);
                    }
                });
                this.postsSource.next(posts);
            }),
        );
    }
}
