import * as yup from 'yup'



export const formSchema = yup.object().shape({
  file: yup.string()
  .nullable()
  .required('VALIDATION_FIELD_REQUIRED')
  .test('is-correct-file', 'VALIDATION_FIELD_FILE_BIG', checkIfFilesAreTooBig)
  ,
  book: yup.string().min(4).required('Vak is verplicht'),
  difficulty: yup.string().min(4).required('Moeilijkheid invullen is verplicht'),
  name: yup.string().min(4),
})

export function checkIfFilesAreTooBig(files) {
  console.log(files)
  let valid = true

      const size = files.size / 1024 / 1024
      if (size > 10) {
        valid = false
      }
  return valid
}

