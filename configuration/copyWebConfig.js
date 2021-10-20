import fs from 'fs-extra';

const webConfigPath = './build/web.config';

if (fs.existsSync(webConfigPath)) {
  fs.unlinkSync(webConfigPath);
}

fs.copySync('./configuration/web.config', webConfigPath);
