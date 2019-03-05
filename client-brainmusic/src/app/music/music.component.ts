import {Component, OnInit} from '@angular/core';
import {MusicService} from '../shared/music.service';
import {Music} from '../shared/music.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  formData: Music;
  list: Music[];
  private readonly API;

  constructor(private service: MusicService,
  ) {
  }


  ngOnInit() {
    this.service.refreshList();

    // @ts-ignore
    this.resetForm();
  }


  populateForm(song: Music) {
    this.service.formData = Object.assign({}, song);
  }

  resetForm(form: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      id: null,
      name: '',
      imageUrl: '',
      songUrl: '',
      category: {
        id: '',
        name: '',
      },
    };
  }

  onSubmit(form: NgForm) {

    if (form.value.id == null) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.service.postSong(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    if (confirm('Are you sure to do update this song')) {
      this.service.putSong(form.value).subscribe(res => {
        this.resetForm(form);
        this.service.refreshList();
      });
    }
  }

  onDelete(id: number) {
    if (confirm('Are you sure to do delete this record')) {
      this.service.deleteSong(id).subscribe(res => {
        this.service.refreshList();
      });
    }
  }
}
