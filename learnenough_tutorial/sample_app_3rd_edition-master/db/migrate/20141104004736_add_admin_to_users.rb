class AddAdminToUsers < ActiveRecord::Migration
  def change    # function defenition
    add_column :users, :admin, :boolean, default: false
  end
end
