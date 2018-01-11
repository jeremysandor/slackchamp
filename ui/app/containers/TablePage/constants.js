/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME';
export const CHANGE_AWAYTEAM = 'boilerplate/Home/CHANGE_AWAYTEAM';
export const CHANGE_HOMETEAM = 'boilerplate/Home/CHANGE_HOMETEAM';
export const CHANGE_LINE = 'boilerplate/Home/CHANGE_LINE';
export const CHANGE_SIDE = 'boilerplate/Home/CHANGE_SIDE';
export const CHANGE_TOTAL = 'boilerplate/Home/CHANGE_TOTAL';
export const CHANGE_DATE = 'boilerplate/Home/CHANGE_DATE';
