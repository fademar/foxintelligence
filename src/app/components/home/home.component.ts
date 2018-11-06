import { Component, OnInit } from '@angular/core';
import { FileService } from '../../services/file.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    file;
    
    constructor(private fileService: FileService) { }

    ngOnInit() {
        this.fileService.getFile().subscribe( data => this.file = data);

    }

}
