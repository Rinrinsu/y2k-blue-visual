import brandIcon from "../assets/pixel-sky/brand-icon.png";
import heroCollage from "../assets/pixel-sky/hero-collage-v2.png";
import heroDailyNotes from "../assets/pixel-sky/hero-daily-notes.png";
import heroKnowledgeCenter from "../assets/pixel-sky/hero-knowledge-center.png";
import calendarIcon from "../assets/pixel-sky/icons/calendar.png";
import dailyIcon from "../assets/pixel-sky/icons/daily.png";
import dashboardIcon from "../assets/pixel-sky/icons/dashboard.png";
import inspirationIcon from "../assets/pixel-sky/icons/inspiration.png";
import juicerIcon from "../assets/pixel-sky/icons/juicer.png";
import knowledgeIcon from "../assets/pixel-sky/icons/knowledge.png";
import projectsIcon from "../assets/pixel-sky/icons/projects.png";
import databaseIcon from "../assets/pixel-sky/action-icons/database.png";
import knowledgeBaseIcon from "../assets/pixel-sky/action-icons/knowledge-base.png";
import navigationAddIcon from "../assets/pixel-sky/action-icons/navigation-add.png";
import navigationDeleteIcon from "../assets/pixel-sky/action-icons/navigation-delete.png";
import navigationRenameIcon from "../assets/pixel-sky/action-icons/navigation-rename.png";
import openSourceIcon from "../assets/pixel-sky/action-icons/open-source.png";
import panelToggleIcon from "../assets/pixel-sky/action-icons/panel-toggle.png";
import refreshIcon from "../assets/pixel-sky/action-icons/refresh.png";
import searchIcon from "../assets/pixel-sky/action-icons/search.png";
import settingsThemeIcon from "../assets/pixel-sky/action-icons/settings-theme.png";
import taskDoneIcon from "../assets/pixel-sky/action-icons/task-done.png";

const EMBEDDED_ASSETS: Record<string, string> = {
  "assets/pixel-sky/brand-icon.png": brandIcon,
  "assets/pixel-sky/hero-collage-v2.png": heroCollage,
  "assets/pixel-sky/hero-daily-notes.png": heroDailyNotes,
  "assets/pixel-sky/hero-knowledge-center.png": heroKnowledgeCenter,
  "assets/pixel-sky/icons/calendar.png": calendarIcon,
  "assets/pixel-sky/icons/daily.png": dailyIcon,
  "assets/pixel-sky/icons/dashboard.png": dashboardIcon,
  "assets/pixel-sky/icons/inspiration.png": inspirationIcon,
  "assets/pixel-sky/icons/juicer.png": juicerIcon,
  "assets/pixel-sky/icons/knowledge.png": knowledgeIcon,
  "assets/pixel-sky/icons/projects.png": projectsIcon,
  "assets/pixel-sky/action-icons/database.png": databaseIcon,
  "assets/pixel-sky/action-icons/knowledge-base.png": knowledgeBaseIcon,
  "assets/pixel-sky/action-icons/navigation-add.png": navigationAddIcon,
  "assets/pixel-sky/action-icons/navigation-delete.png": navigationDeleteIcon,
  "assets/pixel-sky/action-icons/navigation-rename.png": navigationRenameIcon,
  "assets/pixel-sky/action-icons/open-source.png": openSourceIcon,
  "assets/pixel-sky/action-icons/panel-toggle.png": panelToggleIcon,
  "assets/pixel-sky/action-icons/refresh.png": refreshIcon,
  "assets/pixel-sky/action-icons/search.png": searchIcon,
  "assets/pixel-sky/action-icons/settings-theme.png": settingsThemeIcon,
  "assets/pixel-sky/action-icons/task-done.png": taskDoneIcon
};

export function getEmbeddedAssetUrl(relativePath: string): string | undefined {
  return EMBEDDED_ASSETS[relativePath.replace(/\\/g, "/")];
}
