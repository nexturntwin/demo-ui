import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss']
})
export class ThemeSwitchComponent implements OnInit {

  private static readonly DEFAULT_THEME = 'light-theme';
  private static readonly LIGHT_THEME = 'light-theme';
  private static readonly DARK_THEME = 'dark-theme';
  
  lightMode : boolean = true;

  public theme: string;

  ngOnInit(): void {
    this.toggleTheme();
    this.lightMode = false;
  }

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.document.documentElement.classList.add(ThemeSwitchComponent.DEFAULT_THEME);
    this.theme = this.document.documentElement.classList.contains(ThemeSwitchComponent.DEFAULT_THEME) ? 
                    ThemeSwitchComponent.DARK_THEME.split('-')[0] : ThemeSwitchComponent.LIGHT_THEME.split('-')[0];
  }

  public toggleTheme() {
    if(this.lightMode) {
      this.selectLightTheme();
    } else {
      this.selectDarkTheme();
    }
  }
  
  public selectDarkTheme(): void {
      this.document.documentElement.classList.remove(ThemeSwitchComponent.LIGHT_THEME);
      this.document.documentElement.classList.add(ThemeSwitchComponent.DARK_THEME);
      this.theme = ThemeSwitchComponent.LIGHT_THEME.split('-')[0];
  }

  public selectLightTheme(): void {
      this.document.documentElement.classList.remove(ThemeSwitchComponent.DARK_THEME);
      this.document.documentElement.classList.add(ThemeSwitchComponent.LIGHT_THEME);
      this.theme = ThemeSwitchComponent.DARK_THEME.split('-')[0];
  }

  public themeTooltip(): string {
    return "Toggle " + this.theme.toUpperCase() + " Mode";
  }
}
