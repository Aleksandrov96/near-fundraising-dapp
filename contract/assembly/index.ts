import { Project, projects } from "./model";
import { logging } from "near-sdk-as";

//View methods
export function getById(id: u32): Project {
  return Project.findById(id);
}

export function get(offset: u32, limit: u32 = 10): Project[] {
  return Project.find(offset, limit);
}

//Change methods
export function create(name: string, url: string, description: string, wallet: string): Project {
  logging.log(projects);
  return Project.create(name, url, description, wallet);
}

export function del(id: u32): void {
  Project.findByIdAndDelete(id);
}

export function donate(id: u32, amount: u32): void {
  Project.donateToProject(id, amount);
}