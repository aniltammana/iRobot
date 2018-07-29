import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CitizenService } from '../../shared/services/citizen.service';
import { Document } from '../../shared/services/Document';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {
    localUrl: any[];
    document:Document;
    documents:Document[];

    constructor(private citizenService:CitizenService,private toastr: ToastrService) {
        this.document= new Document();
        this.documents=[]
     }   

    ngOnInit() { }

    showPreviewImage(event: any) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = (event: any) => {
                this.localUrl = event.target.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    UploadDocument() { 
      this.documents.push(this.document);
      this.toastr.success('Docucment status', 'Your document has been uploaded succesfully!');
    }

}
