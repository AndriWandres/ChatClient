import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { LanguageFacade } from '@chat-client/shared/language/store';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {
  readonly languages$ = this.languageFacade.languages$;
  readonly selectedLanguage$ = this.languageFacade.selectedLanguage$;

  constructor(private readonly languageFacade: LanguageFacade) { }

  ngOnInit(): void {
    this.languageFacade.getLanguages();
  }

  selectLanguage(languageId: number): void {
    this.languageFacade.selectLanguage(languageId);
  }
}