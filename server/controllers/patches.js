const jsonPatch = require('jsonpatch');

exports.patches = (req, res, next) => {
  const { bfPatch } = req.body;
  const { afPatch } = req.body;
  if (typeof (jsonObj) === 'object') {
    const patchedRecord = jsonPatch.apply_patch(bfPatch, afPatch);
    res.status(200).json({
      message: patchedRecord,
    });
  } else {
    res.status(200).json({
      message: 'only objects are allowed',
    });
  }
  next();
};
