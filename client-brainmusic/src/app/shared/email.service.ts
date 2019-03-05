import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Email} from './email.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private readonly API_URL = 'http://178.128.97.6/email/email';

  constructor(private http: HttpClient) {
  }

  sendMail(feedback: Partial<Email>): Observable<Email> {
    return this.http.post<Email>(this.API_URL, feedback);
  }
}
