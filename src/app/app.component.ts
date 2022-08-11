import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta
  ) {}

  post = {
    id: 0,
    userId: 0,
    body: '',
    title: ''
  };

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id');

    fetch('https://jsonplaceholder.typicode.com/posts/${postId}')
      .then(response => response.json())
      .then(post => {
        this.post = post;
        this.title.setTitle('Portfolio');
        this.meta.addTags([
          { name: 'description', content: 'This is an article about Angular Meta service' },
          { name: 'keywords', content: 'angular, javascript, typescript, meta, seo' }  
        ])
      });
  }
}
