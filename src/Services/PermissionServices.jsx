const permission = {
  users: {
    manager: {
      view: true,
      viewDetail: true,
      add: true,
      edit: true,
      cancel: true,
    },
    admin: {
      view: true,
      viewDetail: true,
      add: true,
      edit: true,
      cancel: false,
    },
    logistic: {
      view: true,
      viewDetail: true,
      add: false,
      edit: false,
      cancel: false,
    },
    account: {
      view: true,
      viewDetail: true,
      add: true,
      edit: true,
      cancel: true,
    },
    audit: {
      view: true,
      viewDetail: true,
      add: true,
      edit: true,
      cancel: true,
    },
  },
  teams: {
    manager: {
      view: true,
      viewDetail: true,
      add: true,
      edit: true,
      cancel: true,
      approve: true,
    },
    admin: {
      view: true,
      viewDetail: true,
      add: true,
      edit: true,
      cancel: false,
    },
    logistic: {
      view: false,
      viewDetail: false,
      add: false,
      edit: false,
      cancel: false,
    },
    account: {
      view: true,
      viewDetail: true,
      add: false,
      edit: true,
      cancel: false,
      approve: true,
    },
    audit: {
      view: true,
      viewDetail: true,
      add: false,
      edit: true,
      cancel: false,
      approve: true,
    },
  },
  products: {
    manager: {
      view: true,
      viewDetail: true,
      add: true,
      edit: true,
      cancel: true,
    },
    admin: {
      view: true,
      viewDetail: true,
      add: false,
      edit: false,
      cancel: false,
    },
    logistic: {
      view: true,
      viewDetail: true,
      add: false,
      edit: false,
      cancel: false,
    },
    account: {
      view: true,
      viewDetail: true,
      add: true,
      edit: true,
      cancel: true,
    },
    audit: {
      view: true,
      viewDetail: true,
      add: false,
      edit: false,
      cancel: false,
    },
  },
  orders: {
    manager: {
      view: true,
      viewDetail: true,
      add: true,
      edit: true,
      cancel: true,
      approve: true,
    },
    admin: {
      view: true,
      viewDetail: true,
      add: true,
      edit: false,
      cancel: false,
      approve: false,
    },
    logistic: {
      view: false,
      viewDetail: false,
      add: false,
      edit: false,
      cancel: false,
    },
    account: {
      view: false,
      viewDetail: false,
      add: false,
      edit: false,
      cancel: false,
    },
    audit: {
      view: true,
      viewDetail: true,
      add: false,
      edit: true,
      cancel: false,
      approve: true,
    },
  },
  logistics: {
    manager: {
      view: true,
      viewDetail: true,
      add: true,
      edit: true,
      cancel: true,
    },
    admin: {
      view: true,
      viewDetail: true,
      add: true,
      edit: false,
      cancel: false,
    },
    logistic: {
      view: true,
      viewDetail: true,
      add: true,
      edit: true,
      cancel: true,
    },
    account: {
      view: false,
      viewDetail: false,
      add: false,
      edit: false,
      cancel: false,
    },
    audit: {
      view: false,
      viewDetail: false,
      add: false,
      edit: false,
      cancel: false,
    },
  },
  setting: {
    manager: {
      view: true,
      add: true,
      edit: true,
      cancel: true,
    },
    admin: {
      view: false,
      add: false,
      edit: false,
      cancel: false,
    },
    logistic: {
      view: false,
      add: false,
      edit: false,
      cancel: false,
    },
    account: {
      view: false,
      add: false,
      edit: false,
      cancel: false,
    },
    audit: {
      view: false,
      add: false,
      edit: false,
      cancel: false,
    },
  },
}
export const permissionCheck = (page, role) => {
  return {
    ...permission[page][role],
  }
}

export const pathVisible = (path, role) => {
  const module = path.replace('/', '')
  try {
    const grant = permission[module][role]
    return Object.values(grant).reduce((r, v) => r || v)
  } catch (e) {
    return false
  }
}
