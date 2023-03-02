import core from '@actions/core';
import { WebClient } from './wled-client';
import { objectBuilder } from './builder';
(async () => {
  try {
    const url = core.getInput('url');
    const status = core.getInput('status');
    const palette = core.getInput('palette');
    const effect = core.getInput('effect');
    const wled = new WebClient(url);

    if (!url) {
      core.setFailed(`You must provider either a 'url'`);
      return
    }

    const attachments = objectBuilder(status, palette, effect);

    const response = await wled.exec(attachments);

    core.setOutput('message_id', response);
  } catch (error) {
    core.setFailed(error);
  }
})();
