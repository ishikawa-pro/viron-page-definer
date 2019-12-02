interface ISection {
  id: string
  label: string
}

function createSection(id: string, label: string): ISection {
  return {id, label};
}

export function createSections(sections: {[n: string]: string}): ISection[] {
  const result: ISection[] = [];
  Object.keys(sections).forEach(k => {
    result.push(createSection(k, sections[k]));
  });
  return result;
}