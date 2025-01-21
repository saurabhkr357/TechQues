import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { APIResponsModel } from '../model/language.model';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  apiEndPoint: string = "https://freeapi.gerasim.in/api/Interview/";
  apiEndPoint2: string = "https://freeapi.gerasim.in/api/miniproject/";

  selectedLanguage$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  


  constructor(private http: HttpClient) { }

  setSelectedLanguage(languageId: number) {
    debugger;
    this.selectedLanguage$.next(languageId);
  }

  readSelectedLanguage() {
    return this.selectedLanguage$;
  }

  private apiUrl = 'https://projectapi.gerasim.in/api/BudgetPlanner/'; // Adjust to your API URL


  getAllLanguage(): Observable<APIResponsModel> {
    return this.http.get<APIResponsModel>(this.apiEndPoint +"GetAllLanguage");
  }

  getTopicsBYLangId(langId: number): Observable<APIResponsModel> {
    return this.http.get<APIResponsModel>(this.apiEndPoint +"GetLanguageTopicById?id=" +langId );
  } 

  getQuestionBtTopicId(topicId: number): Observable<APIResponsModel> {
    return this.http.get<APIResponsModel>(this.apiEndPoint +"GetQuestionByTopicId?id=" +topicId );
  }  
  getQuestionBtLangId(langId: number): Observable<APIResponsModel> {
    return this.http.get<APIResponsModel>(this.apiEndPoint +"GetAllQuestionsByLanguageId?id=" +langId );
  }  

  getQuestionCountByLanguage(): Observable<APIResponsModel> {
    return this.http.get<APIResponsModel>(this.apiEndPoint +"GetQuestionCountByLanguage");
  }
  getQuestionBysearchquery(str: string): Observable<APIResponsModel> {
    return this.http.get<APIResponsModel>(this.apiEndPoint +"search?searchquery="+str);
  }
  getAllProjects() {
    return this.http.get(this.apiEndPoint2 +"GetAllProjects")
  }
  
}

export interface VideoDetails {
  id: number;
  title: string;
  url: string;
  liveVersion: string;
  videoType: string;
  apiSwaggerUrl: string;
  duration: string;
  description: string;
}