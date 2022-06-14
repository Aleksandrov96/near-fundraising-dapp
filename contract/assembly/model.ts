import {
  PersistentUnorderedMap, math, ContractPromiseBatch, u128,
} from 'near-sdk-as';

export const projects = new PersistentUnorderedMap<u32, Project>('projects');

export const ONE_NEAR = u128.from('1000000000000000000000000');

@nearBindgen
export class Project {
  id: u32;

  name: string;

  url: string;

  description: string;

  wallet: string;

  constructor(name: string, url: string, description: string, wallet: string) {
    this.id = math.hash32<string>(name);
    this.name = name;
    this.url = url;
    this.description = description;
    this.wallet = wallet;
  }

  static create(name: string, url: string, description: string, wallet: string): Project {
    const project = new Project(name, url, description, wallet);
    projects.set(project.id, project);
    return project;
  }

  static findById(id: u32): Project {
    return projects.getSome(id);
  }

  static getProjects(offset: u32, limit: u32): Project[] {
    return projects.values(offset, offset + limit);
  }

  static findByIdAndDelete(id: u32): void {
    projects.delete(id);
  }

  static donateToProject(id: u32, amount: u32): void {
    const currentProject = Project.findById(id);
    const ownerWallet = ContractPromiseBatch.create(currentProject.wallet);
    ownerWallet.transfer(u128.mul(ONE_NEAR, u128.from(amount)));
  }
}
