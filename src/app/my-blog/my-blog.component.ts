import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-blog',
  templateUrl: './my-blog.component.html',
  styleUrls: ['./my-blog.component.css']
})
export class MyBlogComponent implements OnInit {

  titleBlog:String = 'Blog';


  posts = [
      {
      id:0,
      title: 'Premier Post',
      content: 'Ceci est le contenu de mon premier post',
      loveIts: 2,
      created_at: new Date()
    } ,{
      id:1,
      title: 'Deuxième  Post',
      content: 'Ceci est le contenu de mon Deuxième post',
      loveIts: -5,
      created_at: new Date()
    } ,{
      id:2,
      title: 'Encore un Post',
      content: 'Ceci est le contenu de mon autre post',
      loveIts: 0,
      created_at: new Date()
    } 
  ];
  
  @Input() appreciation;

  constructor() { }

  ngOnInit() {
  }

  getColor(){
    if(this.appreciation > 0) {
      return 'green';
    }else if(this.appreciation < 0) {
      return 'red';
    }else {
      return 'black';
    }
  }

  onLike(id) {
    this.posts[id].loveIts += 1 ;
  }
 
 onDislike(id) {
    this.posts[id].loveIts -= 1 ;
 }
}
