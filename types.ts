// Comman

const enum TopSectionTags {
  section = "section",
  header = "header",
  paragraph = "paragraph"
}

type TopSection<T> = {
  [T in string]: string
}

// Navbar

interface NavbarBtnsData {
  title: string,
  link: string
}

const enum NavbarBtns {
  home = "home",
  about = "about",
  projects = "projects",
  experience = "experience",
  technologies = "technologies"
}

type Navbar<T> = {
  [T in string]: NavbarBtnsData
}

export type INavbar = Navbar<NavbarBtns>

// Hero

export interface IHero {
  section: string,
  header: string
}

// About

export type IAbout = TopSection<TopSectionTags>

// Technologies

export interface ITechnologies extends TopSection<TopSectionTags> {
  data: any
}

// Experience

const enum ExperienceDataSetTags {
  title = "title",
  Project = "Project",
  Role = "Role",
  Duration = "Duration",
  Tech = "Tech",
  paragraph1 = "paragraph1",
  paragraph2 = "paragraph2",
  paragraph3 = "paragraph3",
  paragraph4 = "paragraph4",
  img = "img",
}

type ExperienceDataSet<T> = {
  [T in string]: string
}

interface ExperienceData {
  Vigyan: ExperienceDataSet<ExperienceDataSetTags>,
  Asquare: ExperienceDataSet<ExperienceDataSetTags>
}

export interface IExperience {
  section: string,
  data: ExperienceData
}

// Projects

const enum ProjectsDataSetTags {
  title = "title",
  Project = "Project",
  Role = "Role",
  Duration = "Duration",
  Tech = "Tech",
  paragraph1 = "paragraph1",
  paragraph2 = "paragraph2",
  paragraph3 = "paragraph3",
  paragraph4 = "paragraph4",
  img = "img",
}

type ProjectsDataSet<T> = {
  [T in string]: string
}

interface ProjectsData {
  project1: ProjectsDataSet<ProjectsDataSetTags>,
  project2: ProjectsDataSet<ProjectsDataSetTags>,
  project3: ProjectsDataSet<ProjectsDataSetTags>
}

export interface IProjects {
  section: string,
  data: ProjectsData
}

// Open Source

export interface IOpenSource extends TopSection<TopSectionTags> {
  data: any
}

// Blogs

export interface IBlogs extends TopSection<TopSectionTags> {
  data: any
}

// Connect

export interface IConnect extends TopSection<TopSectionTags> {
  data: any
}