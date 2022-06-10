import { getById, get, create, del } from "..";
import { Project, projects } from "../model";

describe("contract methods", () => {
  it("creates project", () => {
    const project = create("project", "url", "description", "wallet.testnet");
    expect(projects.getSome(project.id)).toStrictEqual(project);
  });

  it("gets project by id", () => {
    // create three projects
    const a = Project.create("project1", "url1", "description1", "wallet.testnet1");
    const b = Project.create("project2", "url2", "description2", "wallet.testnet2");
    const c = Project.create("project3", "url3", "description3", "wallet.testnet3");

    // get each project by id
    expect(getById(a.id)).toStrictEqual(a);
    expect(getById(b.id)).toStrictEqual(b);
    expect(getById(c.id)).toStrictEqual(c);
  });

  it("gets a list of projects", () => {
    const projects = new Array<number>(20)
      .fill(0)
      .map<Project>((_, i) => Project.create("project", "url", "description", "wallet.testnet" + i.toString()))
    
    expect(get(20, 10)).toStrictEqual(projects.slice(20));
    expect(get(5, 10)).toStrictEqual(projects.slice(20));
  });

  itThrows('deletes a project', () => {
    const project = Project.create("project", "url", "description", "wallet.testnet");

    del(project.id)

    Project.findById(project.id)
  });
}); 