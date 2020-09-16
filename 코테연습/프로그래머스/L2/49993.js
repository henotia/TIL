// https://programmers.co.kr/learn/courses/30/lessons/49993

// match all 로 찾아서 비교
// regexp를 좀 더 다듬으면 좋을듯
function solution(skill, trees) {
  const r = trees.reduce((acc, tree) => {
    const reg = new RegExp(`\(${skill.split('').join(')|(')}\)`, 'g');
    const matches = tree.matchAll(reg);
    const test = [];
    for (const m of matches) {
      test.push(m[0]);
    }

    const v = test.join('');
    if (v === '') acc.push(tree);
    else if (skill.slice(0, v.length) === v) acc.push(tree);
    return acc;
  }, []);

  return r.length;
}


// reg negative set으로 replace 후 처리
function solution2(skill, skill_trees) {
  var answer = 0;
  var regex = new RegExp(`[^${skill}]`, 'g');

  return skill_trees
  .map((x) => x.replace(regex, ''))
  .filter((x) => skill.indexOf(x) === 0 || x === "")
    .length
}

// solution("CBD", ["BACDE", "CBADF", "AECB", "BDA", 'CABED', 'CBADEFG', 'XYZ']) // 4
// solution("ASDF", ["AQWERSZXCVD", 'ZXCVASDFQWER', 'FDAS', 'FGH', 'AS', 'SD', 'A', 'GHK']) // 5
solution2("ASDF", ["AQWERSZXCVD", 'ZXCVASDFQWER', 'FDAS', 'FGH', 'AS', 'SD', 'A', 'GHK']); // 5
