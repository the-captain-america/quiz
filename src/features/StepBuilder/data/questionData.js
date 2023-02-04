const categories = {
  existence: [7, 13, 19, 25, 31, 37, 43, 49, 55],
  meaning: [6, 12, 18, 24, 30, 36, 42, 48, 54, 60],
  mission: [5, 11, 17, 23, 29, 35, 41, 47, 53, 59],
  power: [4, 10, 16, 22, 28, 34, 40, 46, 52, 58],
  structure: [3, 9, 15, 21, 27, 33, 39, 45, 51, 57],
  resources: [2, 8, 14, 20, 26, 32, 38, 44, 50, 56],
};

const options = [
  {
    id: 1,
    dimension: 'existence',
    label: 'The history of this problem does not limit our present action.',
    order: 'forward',
  },
  {
    id: 2,
    dimension: 'resources',
    label: 'We have the right talent to accomplish things.',
    order: 'forward',
  },
  {
    id: 3,
    dimension: 'structure',
    label: 'We need more coordination with this problem.',
    order: 'reverse',
  },
  {
    id: 4,
    dimension: 'power',
    label:
      'Our family/unit/team/etc. are apathetic with regards to this problem.',
    order: 'reverse',
  },
  {
    id: 5,
    dimension: 'mission',
    label: 'This problem (action) has a clear goal.',
    order: 'forward',
  },
  {
    id: 6,
    dimension: 'meaning',
    label:
      'Members in our family/unit, department/organization know why the problem exists.',
    order: 'forward',
  },
  {
    id: 7,
    dimension: 'existence',
    label: `“We’ve always done it this
      way,” is heard a lot around
      here.`,
    order: 'reverse',
  },
  {
    id: 8,
    dimension: 'resources',
    label: `We don’t have adequate
      resources to solve this
      problem.`,
    order: 'reverse',
  },
  {
    id: 9,
    dimension: 'structure',
    label: `Membership tasks are
      clearly defined.`,
    order: 'forwards',
  },
  {
    id: 10,
    dimension: 'power',
    label: `Most people connected with
      this problem are motivated
      to action.`,
    order: 'forwards',
  },
  {
    id: 11,
    dimension: 'mission',
    label: `We don’t have a clear
      purpose; we just carry on
      with the same activities year
      after year.`,
    order: 'reverse',
  },
  {
    id: 12,
    dimension: 'meaning',
    label: `Things just aren’t fair here.`,
    order: 'reverse',
  },
  {
    id: 13,
    dimension: 'existence',
    label: `This problem causes people
      here to worry about survival.`,
    order: 'reverse',
  },
  {
    id: 14,
    dimension: 'resources',
    label: `We have the tools to get our
      problem solved.`,
    order: 'forwards',
  },
  {
    id: 15,
    dimension: 'structure',
    label: `We can’t seem to get things
      done because we’re poorly
      organized.`,
    order: 'reverse',
  },
  {
    id: 16,
    dimension: 'power',
    label: `There is too much
      sneakiness around this
      problem.`,
    order: 'reverse',
  },
  {
    id: 17,
    dimension: 'mission',
    label: `We don’t have a single direction; we seem to have
      a number of purposes.`,
    order: 'reverse',
  },
  {
    id: 18,
    dimension: 'meaning',
    label: `The reasons for solving this
      problem are worthwhile.`,
    order: 'forwards',
  },
  {
    id: 19,
    dimension: 'existence',
    label: `Things are the way they are
      and can’t be changed.`,
    order: 'reverse',
  },
  {
    id: 20,
    dimension: 'resources',
    label: `People here don’t have the
      necessary skills or
      knowledge to solve this
      problem.`,
    order: 'reverse',
  },
  {
    id: 21,
    dimension: 'structure',
    label: `We have developed
      effective procedures to fix
      this problem.`,
    order: 'forwards',
  },
  {
    id: 22,
    dimension: 'power',
    label: `There is a lot of energy and
      excitement around this
      problem.`,
    order: 'forwards',
  },
  {
    id: 23,
    dimension: 'mission',
    label: `I feel that I clearly
      understand the goals
      required to solve this
      problem.`,
    order: 'forwards',
  },
  {
    id: 24,
    dimension: 'meaning',
    label: `With this problem, we don’t
      fundamentally agree on why
      we are doing what we are
      doing.`,
    order: 'reverse',
  },
  {
    id: 25,
    dimension: 'existence',
    label: `The problem we face is not
      overwhelming us.`,
    order: 'forwards',
  },
  {
    id: 26,
    dimension: 'resources',
    label: `A lot of time, money, and/or
      materials are wasted
      around this problem.`,
    order: 'reverse',
  },
  {
    id: 27,
    dimension: 'structure',
    label: `There is no procedure for
      me to voice my opinions
      with this problem.`,
    order: 'reverse',
  },
  {
    id: 28,
    dimension: 'power',
    label: `In this problem, deals are
      often cut by only a few
      powerful individuals.`,
    order: 'reverse',
  },
  {
    id: 29,
    dimension: 'mission',
    label: `I have trouble
      understanding where we
      are headed.`,
    order: 'reverse',
  },
  {
    id: 30,
    dimension: 'meaning',
    label: `The family/unit/team/etc. feels we are achieving things they value as important.`,
    order: 'forwards',
  },
  {
    id: 31,
    dimension: 'existence',
    label: `People in this problem feel trapped by the past.`,
    order: 'reverse',
  },
  {
    id: 32,
    dimension: 'resources',
    label: `In our problem, money and other support are adequate.`,
    order: 'forwards',
  },
  {
    id: 33,
    dimension: 'structure',
    label: `With regards to this problem, we set up procedures, but they just don’t work.`,
    order: 'reverse',
  },
  {
    id: 34,
    dimension: 'power',
    label: `In this problem, we seem to be only reactive (putting out brush fires), not proactive (taking control).`,
    order: 'reverse',
  },
  {
    id: 35,
    dimension: 'mission',
    label: `Most family members/unit/team/etc have a good grasp of this problem’s purposes.`,
    order: 'forwards',
  },
  {
    id: 36,
    dimension: 'meaning',
    label: `Our confusion about values associated with this problem are causing a problem.`,
    order: 'reverse',
  },
  {
    id: 37,
    dimension: 'existence',
    label: `People in this problem are stuck in the past with few or no future possibilities.`,
    order: 'reverse',
  },
  {
    id: 38,
    dimension: 'resources',
    label: `Good training for our family/unit/team/etc. is one of our assets to solve this problem.`,
    order: 'forwards',
  },
  {
    id: 39,
    dimension: 'structure',
    label: `We communicate well with each other.`,
    order: 'forwards',
  },
  {
    id: 40,
    dimension: 'power',
    label: `Our family/unit/team/etc. cooperate well despite our problem.`,
    order: 'forwards',
  },
  {
    id: 41,
    dimension: 'mission',
    label: `There seems to be a lot of confusion among ourselves on where this problem is headed.`,
    order: 'reverse',
  },
  {
    id: 42,
    dimension: 'meaning',
    label: `There seems to be a clear consensus among our family/unit/team/etc. that this problem is tied to meaningful values.`,
    order: 'forwards',
  },
  {
    id: 43,
    dimension: 'existence',
    label: `We have a rich tradition from which to draw.`,
    order: 'forwards',
  },
  {
    id: 44,
    dimension: 'resources',
    label: `Sometimes we waste each others’ ideas and skills when addressing this problem.`,
    order: 'reverse',
  },
  {
    id: 45,
    dimension: 'structure',
    label: `The system just isn’t right to solve this problem.`,
    order: 'reverse',
  },
  {
    id: 46,
    dimension: 'power',
    label: `People fight a lot around this problem.`,
    order: 'reverse',
  },
  {
    id: 47,
    dimension: 'mission',
    label: `There are great differences among ourselves on exactly where we should be headed.`,
    order: 'reverse',
  },
  {
    id: 48,
    dimension: 'meaning',
    label: `I’m not always sure why I’m here.`,
    order: 'reverse',
  },
  {
    id: 49,
    dimension: 'existence',
    label: `Sometimes I wonder if this problem will kill us.`,
    order: 'reverse',
  },
  {
    id: 50,
    dimension: 'resources',
    label: `Facilities and equipment are available to solve this problem.`,
    order: 'forwards',
  },
  {
    id: 51,
    dimension: 'resources',
    label: `We have a system for effective communication.`,
    order: 'forwards',
  },
  {
    id: 52,
    dimension: 'power',
    label: `Struggles for control are common around this problem.`,
    order: 'reverse',
  },
  {
    id: 53,
    dimension: 'mission',
    label: `There is wide agreement on our mission with regards to this problem.`,
    order: 'forwards',
  },
  {
    id: 54,
    dimension: 'meaning',
    label: `The family/unit/team/etc. in which we exist feels what we are doing is important.`,
    order: 'forwards',
  },
  {
    id: 55,
    dimension: 'existence',
    label: `This problem has overwhelmed us beyond our control.`,
    order: 'reverse',
  },
  {
    id: 56,
    dimension: 'resources',
    label: `A shortage of revenue limits our effectiveness.`,
    order: 'reverse',
  },
  {
    id: 57,
    dimension: 'structure',
    label: `Our family/unit/team/etc. are too often doing the wrong tasks.`,
    order: 'reverse',
  },
  {
    id: 58,
    dimension: 'power',
    label: `Differences are discussed openly around this problem.`,
    order: 'forwards',
  },
  {
    id: 59,
    dimension: 'mission',
    label: `We have trouble making decisions because we have no overall purpose to guide us.`,
    order: 'reverse',
  },
  {
    id: 60,
    dimension: 'meaning',
    label: `We all know why it is so important to solve this problem.`,
    order: 'forwards',
  },
];

export { categories, options };
