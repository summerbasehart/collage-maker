import { Component } from '@angular/core';
import { Image } from "./image.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  imagesConfig = {
    1: [{grow: 1, shrink: 0, basis: 'calc(25% - 0.5rem)'}]
  };
  images: Image [] = [
    {src: 'https://res.cloudinary.com/thebellhop/image/upload/c_fill,fl_progressive,q_auto,f_auto,dpr_auto,h_300,w_800/v1495185249/hotels/264/facadelobby.jpg', grow: 1, shrink: 0, basis: 'calc(25% - 0.5rem)'},
    {src: 'https://res.cloudinary.com/thebellhop/image/upload/c_fill,fl_progressive,q_auto,f_auto,dpr_auto,h_300,w_800/v1495185251/hotels/264/sample-img-main-1.jpg', grow: 1, shrink: 0, basis: 'calc(50% - 0.5rem)'},
    {src: 'https://res.cloudinary.com/thebellhop/image/upload/c_fill,fl_progressive,q_auto,f_auto,dpr_auto,h_300,w_800/v1495185599/hotels/264/53.jpg', grow: 1, shrink: 0, basis: 'calc(25% - 0.5rem)'},
    {src: 'https://res.cloudinary.com/thebellhop/image/upload/c_fill,fl_progressive,q_auto,f_auto,dpr_auto,h_300,w_800/v1495185601/hotels/264/D7L_2879-A.jpg', grow: 1, shrink: 0, basis: 'calc(50% - 0.5rem)'},
    {src: 'https://res.cloudinary.com/thebellhop/image/upload/c_fill,fl_progressive,q_auto,f_auto,dpr_auto,h_300,w_800/v1495185603/hotels/264/D7L_2957-A.jpg', grow: 1, shrink: 0, basis: 'calc(25% - 0.5rem)'},
    {src: 'https://smagr20t7ik43gmw2238t3kr-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/Screen-Shot-2018-09-19-at-12.03.26-PM.png', grow: 1, shrink: 0, basis: 'calc(25% - 0.5rem)'},
  ];

  collage: Image [] = []

  addCollage(this: any) {
    this.collage.push(this)
  }
}