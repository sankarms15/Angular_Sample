import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-whoami',
  templateUrl: './whoami.component.html',
  styleUrls: ['./whoami.component.scss']
})
export class WhoamiComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit() {}
  open(content) {
    this.modalService.open(content);
  }
}
