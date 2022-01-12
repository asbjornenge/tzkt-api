import FileHound from 'filehound'
import fs from 'fs'
import path from 'path'

const files = FileHound.create()
  .paths('generated')
  .discard('node_modules')
  .ext('ts')
  .find();

files.then((filePaths) => {

  filePaths.forEach((filepath) => {
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) throw err;
      let _data = data
      _data = _data.replace(/(import .* from\s+['"])(.*)(?=['"])/g, '$1$2.js')
      _data = _data.replace(/(export .* from\s+['"])(.*)(?=['"])/g, '$1$2.js')
      _data = _data.replace('node-fetch.js', 'node-fetch')
      _data = _data.replace('abort-controller.js', 'abort-controller')
      _data = _data.replace('form-data.js', 'form-data')
      console.log(`writing to ${filepath}`)
      fs.writeFile(filepath, _data, function (err) {
        if (err) {
          throw err;
        }
        console.log('complete');
      });
    })

  })
});
