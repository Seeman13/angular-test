import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms'

export function fieldRequire (): ValidatorFn | ValidatorFn[] {
  return (group: FormGroup): ValidationErrors => {
    const url = group.controls['url']
    const thumbnailUrl = group.controls['thumbnailUrl']

    if ((!url.value && !thumbnailUrl.value) || (url.value && thumbnailUrl.value)) {
      const errorReport = { requiredWithout: true }
      url.setErrors(errorReport)
      thumbnailUrl.setErrors(errorReport)
      return errorReport
    }

    url.setErrors(null)
    thumbnailUrl.setErrors(null)
    return null
  }
}
